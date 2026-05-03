import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { Award, Camera, Check, FileText, Shield, User } from 'lucide-react';
import { useAuth } from '../App';

const COUNTRY_OPTIONS = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'Italy',
  'Spain',
  'Netherlands',
  'Switzerland',
  'Sweden',
  'Norway',
  'Denmark',
  'United Arab Emirates',
  'Saudi Arabia',
  'Singapore',
  'Malaysia',
  'Thailand',
  'Myanmar',
  'India',
  'Japan',
  'South Korea',
  'Philippines',
  'Indonesia',
  'Vietnam',
  'Brazil',
  'Mexico',
  'South Africa',
  'Nigeria',
];

function verificationStatusLabel(status: 'unverified' | 'pending' | 'approved' | 'rejected') {
  if (status === 'approved') return 'Verified Account';
  if (status === 'pending') return 'Verification Pending';
  if (status === 'rejected') return 'Verification Rejected';
  return 'Unverified Account';
}

export default function ProfilePage() {
  const { user, updateUser, submitKycRequest } = useAuth();
  const hasVerifiedProfile = user?.verificationStatus === 'approved';
  const memberSince = user?.joinedDate ? new Date(user.joinedDate).toLocaleDateString() : 'Not available';
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'verification'>('profile');
  const [editMode, setEditMode] = useState(false);
  const [securityMode, setSecurityMode] = useState(false);
  const [kycSubmitted, setKycSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: hasVerifiedProfile ? user?.phone || '' : '',
    country: hasVerifiedProfile ? user?.country || '' : '',
    city: hasVerifiedProfile ? user?.city || '' : '',
    postCode: hasVerifiedProfile ? user?.postCode || '' : '',
    timezone: user?.timezone || '',
    avatar: user?.avatar || '',
  });
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [kycForm, setKycForm] = useState({
    fullName: user?.kyc?.fullName || user?.name || '',
    phone: user?.kyc?.phone || (hasVerifiedProfile ? user?.phone || '' : ''),
    country: user?.kyc?.country || (hasVerifiedProfile ? user?.country || '' : ''),
    city: user?.kyc?.city || (hasVerifiedProfile ? user?.city || '' : ''),
    postCode: user?.kyc?.postCode || (hasVerifiedProfile ? user?.postCode || '' : ''),
    job: user?.kyc?.job || (hasVerifiedProfile ? user?.job || '' : ''),
    documentType: (user?.kyc?.documentType || 'passport') as 'id_card' | 'drivers_license' | 'passport',
    frontImage: user?.kyc?.frontImage || '',
    backImage: user?.kyc?.backImage || '',
  });

  useEffect(() => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.verificationStatus === 'approved' ? user?.phone || '' : '',
      country: user?.verificationStatus === 'approved' ? user?.country || '' : '',
      city: user?.verificationStatus === 'approved' ? user?.city || '' : '',
      postCode: user?.verificationStatus === 'approved' ? user?.postCode || '' : '',
      timezone: user?.timezone || '',
      avatar: user?.avatar || '',
    });
    setKycForm({
      fullName: user?.kyc?.fullName || user?.name || '',
      phone: user?.kyc?.phone || (user?.verificationStatus === 'approved' ? user?.phone || '' : ''),
      country: user?.kyc?.country || (user?.verificationStatus === 'approved' ? user?.country || '' : ''),
      city: user?.kyc?.city || (user?.verificationStatus === 'approved' ? user?.city || '' : ''),
      postCode: user?.kyc?.postCode || (user?.verificationStatus === 'approved' ? user?.postCode || '' : ''),
      job: user?.kyc?.job || (user?.verificationStatus === 'approved' ? user?.job || '' : ''),
      documentType: (user?.kyc?.documentType || 'passport') as 'id_card' | 'drivers_license' | 'passport',
      frontImage: user?.kyc?.frontImage || '',
      backImage: user?.kyc?.backImage || '',
    });
  }, [user]);

  const verificationStatus = user?.verificationStatus || 'unverified';
  const verificationLabel = useMemo(() => verificationStatusLabel(verificationStatus), [verificationStatus]);
  const accountTier = hasVerifiedProfile ? 'Verified Trader' : verificationLabel;
  const displayName = formData.name || user?.name || 'Trader';
  const displayEmail = formData.email || user?.email || 'No email added yet';
  const avatarInitial = displayName.trim().charAt(0).toUpperCase() || 'T';
  const currentKyc = user?.kyc;
  const currentDocumentType = (currentKyc?.documentType || 'passport').replace('_', ' ');

  const saveProfile = () => {
    updateUser(formData);
    setEditMode(false);
  };

  const handleAvatarUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : '';
      if (result) {
        setFormData((current) => ({ ...current, avatar: result }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleKycImageUpload = (field: 'frontImage' | 'backImage') => (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : '';
      if (result) {
        setKycForm((current) => ({ ...current, [field]: result }));
      }
    };
    reader.readAsDataURL(file);
  };

  const savePassword = () => {
    if (!passwords.newPassword || passwords.newPassword !== passwords.confirmPassword) {
      alert('New passwords do not match');
      return;
    }
    updateUser({ password: passwords.newPassword });
    setPasswords({ currentPassword: '', newPassword: '', confirmPassword: '' });
    setSecurityMode(false);
  };

  const submitKyc = () => {
    if (!kycForm.fullName || !kycForm.phone || !kycForm.country || !kycForm.city || !kycForm.postCode || !kycForm.job || !kycForm.frontImage || !kycForm.backImage) {
      alert('Complete all verification fields and upload both document images.');
      return;
    }
    updateUser({
      isVerified: false,
      verificationStatus: 'pending',
      kyc: {
        ...kycForm,
        documentType: kycForm.documentType as 'id_card' | 'drivers_license' | 'passport',
        status: 'pending',
        submittedAt: new Date().toISOString(),
        reviewedAt: undefined,
        reviewedBy: undefined,
      },
    });
    if (user) {
      submitKycRequest({
        id: `kyc-${Date.now()}`,
        userEmail: user.email,
        userName: user.name,
        fullName: kycForm.fullName,
        phone: kycForm.phone,
        country: kycForm.country,
        city: kycForm.city,
        postCode: kycForm.postCode,
        job: kycForm.job,
        documentType: kycForm.documentType,
        frontImage: kycForm.frontImage,
        backImage: kycForm.backImage,
        status: 'pending',
        submittedAt: new Date().toISOString(),
      });
    }
    setKycSubmitted(true);
  };

  return (
    <div className="profile-shell">
      <style>{`
        .profile-shell {
          max-width: 1100px;
          margin: 0 auto;
          color: #eef3fb;
          display: grid;
          gap: 22px;
        }
        .card {
          background: linear-gradient(180deg, rgba(15, 19, 28, 0.94), rgba(12, 16, 24, 0.9));
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 28px;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.24);
        }
        .hero, .content-card { padding: 24px; }
        .content-card.profile-card {
          min-height: calc(100vh - 320px);
          display: flex;
          flex-direction: column;
        }
        .hero {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 18px;
          justify-content: space-between;
          background:
            radial-gradient(circle at top right, rgba(247, 147, 26, 0.18), transparent 24%),
            linear-gradient(180deg, rgba(15, 19, 28, 0.96), rgba(12, 16, 24, 0.92));
        }
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(255,255,255,0.02), transparent 35%);
          pointer-events: none;
        }
        .hero-main {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .hero-side {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(2, minmax(120px, 1fr));
          gap: 12px;
          min-width: 280px;
        }
        .desk-strip {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }
        .desk-card {
          padding: 18px;
          border-radius: 22px;
          background:
            linear-gradient(180deg, rgba(18, 23, 34, 0.94), rgba(13, 17, 26, 0.92));
          border: 1px solid rgba(255,255,255,.06);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.02);
        }
        .desk-card span {
          display: block;
          color: #8fa2ba;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: .08em;
          margin-bottom: 8px;
        }
        .desk-card strong {
          display: block;
          font-size: 20px;
          font-weight: 800;
          line-height: 1.4;
        }
        .desk-card small {
          display: block;
          margin-top: 8px;
          color: #7f90a7;
          line-height: 1.5;
        }
        .hero-stat {
          padding: 14px 16px;
          border-radius: 18px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.06);
        }
        .hero-stat span {
          display: block;
          color: #8fa2ba;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: .08em;
          margin-bottom: 6px;
        }
        .hero-stat strong {
          display: block;
          font-size: 15px;
          line-height: 1.45;
        }
        .avatar-wrap {
          width: 96px;
          height: 96px;
          border-radius: 28px;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
          background: linear-gradient(135deg, #f7931a, #ffb347);
        }
        .avatar-wrap img { width: 100%; height: 100%; object-fit: cover; }
        .avatar-fallback {
          width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
          font-size: 34px; font-weight: 800; color: #111;
        }
        .avatar-edit {
          position: absolute; right: 8px; bottom: 8px; width: 32px; height: 32px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,.65); color: #fff;
        }
        .hero h1 { font-size: 30px; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 6px; }
        .hero p { color: #8fa2ba; }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px; margin-top: 10px; padding: 8px 12px;
          border-radius: 999px; font-size: 12px; font-weight: 700;
        }
        .hero-badge.approved {
          background: rgba(14, 203, 129, 0.14); color: #0ecb81;
        }
        .hero-badge.pending { background: rgba(247, 147, 26, 0.14); color: #f6b353; }
        .hero-badge.rejected { background: rgba(246, 70, 93, 0.14); color: #f6465d; }
        .hero-badge.unverified { background: rgba(246, 70, 93, 0.14); color: #f6465d; }
        .tabs { display: flex; gap: 10px; flex-wrap: wrap; padding: 0 6px; }
        .tab-btn {
          min-height: 42px; padding: 0 16px; border-radius: 14px; border: 1px solid rgba(255,255,255,.07);
          background: rgba(255,255,255,.03); color: #8fa2ba; font-weight: 700;
        }
        .tab-btn.active { background: rgba(52,120,246,.18); border-color: rgba(52,120,246,.34); color: #b8d2ff; }
        .card-head {
          display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 22px;
        }
        .card-head h2 { font-size: 22px; font-weight: 800; }
        .edit-btn {
          min-height: 42px; padding: 0 16px; border-radius: 14px; border: 1px solid rgba(255,255,255,.07);
          background: rgba(255,255,255,.03); color: #eef3fb; font-weight: 700;
        }
        .edit-btn.save { background: linear-gradient(135deg, #f7931a, #ffb347); color: #111; border: none; }
        .form-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .content-card.profile-card .form-grid {
          align-content: start;
          flex: 1;
        }
        .field label {
          display: block; font-size: 12px; text-transform: uppercase; letter-spacing: .08em; color: #8fa2ba; margin-bottom: 8px;
        }
        .field input, .field select {
          width: 100%; min-height: 50px; padding: 0 16px; border-radius: 16px; border: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.03); color: #eef3fb;
        }
        .field input:disabled { opacity: .7; }
        .full { grid-column: 1 / -1; }
        .avatar-section {
          grid-column: 1 / -1;
          padding: 18px;
          border-radius: 22px;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.07);
        }
        .avatar-section-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 10px;
        }
        .avatar-section-head strong {
          font-size: 16px;
        }
        .avatar-section-copy {
          display: grid;
          gap: 4px;
        }
        .avatar-section-head span,
        .avatar-help {
          color: #8fa2ba;
          font-size: 13px;
          line-height: 1.6;
        }
        .avatar-preview-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 14px;
        }
        .avatar-preview-chip {
          width: 58px;
          height: 58px;
          border-radius: 18px;
          overflow: hidden;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.08);
          flex-shrink: 0;
        }
        .avatar-preview-chip img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .avatar-preview-copy strong {
          display: block;
          margin-bottom: 4px;
        }
        .avatar-preview-copy span {
          color: #8fa2ba;
          font-size: 13px;
        }
        .avatar-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 16px;
        }
        .upload-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 44px;
          padding: 0 16px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.04);
          color: #eef3fb;
          font-weight: 700;
          cursor: pointer;
        }
        .upload-btn:has(input:disabled) {
          opacity: .55;
          cursor: not-allowed;
        }
        .upload-note {
          color: #8fa2ba;
          font-size: 12px;
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        .info-list { display: grid; gap: 14px; }
        .info-item {
          display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 16px;
          border-radius: 18px; background: rgba(255,255,255,.03);
        }
        .info-item small { color: #8fa2ba; display: block; margin-top: 4px; }
        .account-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-bottom: 22px;
        }
        .account-chip {
          padding: 16px;
          border-radius: 18px;
          background: linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02));
          border: 1px solid rgba(255,255,255,.07);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.03);
        }
        .account-chip span {
          display: block;
          color: #8fa2ba;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: .08em;
          margin-bottom: 8px;
        }
        .account-chip strong {
          display: block;
          font-size: 15px;
          line-height: 1.5;
          word-break: break-word;
        }
        .status-pill { padding: 8px 12px; border-radius: 999px; font-size: 12px; font-weight: 700; }
        .status-pill.on { color: #0ecb81; background: rgba(14,203,129,.14); }
        .status-pill.pending { color: #f6b353; background: rgba(247,147,26,.14); }
        .status-pill.rejected { color: #f6465d; background: rgba(246,70,93,.14); }
        .submit-note { margin-top: 16px; color: #8fa2ba; line-height: 1.6; }
        .kyc-stage {
          display: grid;
          gap: 18px;
        }
        .waiting-card,
        .verified-card {
          padding: 22px;
          border-radius: 24px;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.08);
        }
        .waiting-card {
          background: linear-gradient(180deg, rgba(247,147,26,.08), rgba(255,255,255,.03));
          border-color: rgba(247,147,26,.2);
        }
        .verified-card {
          background: linear-gradient(180deg, rgba(14,203,129,.08), rgba(255,255,255,.03));
          border-color: rgba(14,203,129,.2);
        }
        .kyc-headline {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          font-size: 20px;
          font-weight: 800;
        }
        .kyc-copy {
          color: #8fa2ba;
          line-height: 1.7;
        }
        .doc-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }
        .doc-card {
          padding: 16px;
          border-radius: 20px;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.07);
        }
        .doc-card strong {
          display: block;
          margin-bottom: 10px;
        }
        .doc-preview {
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8fa2ba;
          font-size: 13px;
        }
        .doc-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .certificate-sheet {
          margin-top: 18px;
          background: #fff;
          color: #111;
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 20px 60px rgba(0,0,0,.28);
        }
        .certificate-brand {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
        }
        .certificate-badge {
          width: 72px;
          height: 72px;
          border-radius: 22px;
          background: linear-gradient(135deg, #f7931a, #ffb347);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111;
          font-size: 38px;
          font-weight: 800;
        }
        .certificate-title {
          font-size: 22px;
          font-weight: 800;
          line-height: 1.2;
        }
        .certificate-subtitle {
          margin-top: 4px;
          font-size: 14px;
          color: #59677a;
        }
        .certificate-center {
          text-align: center;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .certificate-meta {
          display: grid;
          gap: 8px;
          font-size: 15px;
          line-height: 1.6;
        }
        .certificate-meta strong {
          font-weight: 800;
        }
        .certificate-notice {
          margin-top: 18px;
          font-size: 14px;
          line-height: 1.7;
          color: #273240;
        }
        .certificate-sign {
          margin-top: 24px;
          font-size: 14px;
          line-height: 1.7;
        }
        @media (max-width: 760px) {
          .hero, .content-card { padding: 18px; }
          .content-card.profile-card { min-height: unset; }
          .hero { flex-direction: column; align-items: flex-start; }
          .hero-main { width: 100%; }
          .hero-side {
            width: 100%;
            min-width: 0;
            grid-template-columns: 1fr 1fr;
          }
          .desk-strip,
          .form-grid { grid-template-columns: 1fr; }
          .account-grid { grid-template-columns: 1fr; }
          .doc-grid { grid-template-columns: 1fr; }
          .certificate-sheet { padding: 20px; }
          .certificate-brand { align-items: flex-start; }
        }
      `}</style>

      <section className="card hero">
        <div className="hero-main">
          <div className="avatar-wrap">
            {formData.avatar ? <img src={formData.avatar} alt={displayName} /> : <div className="avatar-fallback">{avatarInitial}</div>}
            <div className="avatar-edit"><Camera size={16} /></div>
          </div>
          <div>
            <h1>{displayName}</h1>
            <p>{displayEmail}</p>
            <div className={`hero-badge ${
              verificationStatus === 'approved'
                ? 'approved'
                : verificationStatus === 'pending'
                  ? 'pending'
                  : verificationStatus === 'rejected'
                    ? 'rejected'
                    : 'unverified'
            }`}>
              <Award size={14} />
              {verificationLabel}
            </div>
          </div>
        </div>
        <div className="hero-side">
          <div className="hero-stat">
            <span>Access</span>
            <strong>{hasVerifiedProfile ? 'Trading Enabled' : 'Trading Locked'}</strong>
          </div>
          <div className="hero-stat">
            <span>Profile</span>
            <strong>{hasVerifiedProfile ? 'Verified Identity' : 'Needs Verification'}</strong>
          </div>
          <div className="hero-stat">
            <span>Country</span>
            <strong>{hasVerifiedProfile ? (formData.country || 'Not set') : 'Hidden until verified'}</strong>
          </div>
          <div className="hero-stat">
            <span>Phone</span>
            <strong>{hasVerifiedProfile ? (formData.phone || 'Not set') : 'Hidden until verified'}</strong>
          </div>
        </div>
      </section>

      <section className="desk-strip">
        <div className="desk-card">
          <span>Account Tier</span>
          <strong>{accountTier}</strong>
          <small>Your profile status updates here after admin review.</small>
        </div>
        <div className="desk-card">
          <span>Member Since</span>
          <strong>{memberSince}</strong>
          <small>Account creation date for this trading profile.</small>
        </div>
        <div className="desk-card">
          <span>Timezone</span>
          <strong>{formData.timezone || 'UTC'}</strong>
          <small>Your dashboard and profile follow this account region.</small>
        </div>
        <div className="desk-card">
          <span>Security State</span>
          <strong>{user?.password ? 'Password Active' : 'Password Not Set'}</strong>
          <small>Use the security tab to refresh your sign-in credentials.</small>
        </div>
      </section>

      <div className="tabs">
        <button className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}><User size={16} /> Profile</button>
        <button className={`tab-btn ${activeTab === 'security' ? 'active' : ''}`} onClick={() => setActiveTab('security')}><Shield size={16} /> Security</button>
        <button className={`tab-btn ${activeTab === 'verification' ? 'active' : ''}`} onClick={() => setActiveTab('verification')}><FileText size={16} /> Verification</button>
      </div>

      {activeTab === 'profile' && (
        <section className="card content-card profile-card">
          <div className="card-head">
            <h2>Personal Information</h2>
            <button className={`edit-btn ${editMode ? 'save' : ''}`} onClick={() => (editMode ? saveProfile() : setEditMode(true))}>
              {editMode ? <><Check size={16} /> Save</> : 'Edit Profile'}
            </button>
          </div>
          <div className="account-grid">
          <div className="account-chip">
              <span>User Name</span>
              <strong>{displayName}</strong>
            </div>
            <div className="account-chip">
              <span>User Email</span>
              <strong>{displayEmail}</strong>
            </div>
            <div className="account-chip">
              <span>Account Status</span>
              <strong>
                {verificationStatus === 'approved'
                  ? 'Verified account'
                  : verificationStatus === 'pending'
                    ? 'Verification pending'
                    : 'Unverified account'}
              </strong>
            </div>
            <div className="account-chip">
              <span>Account ID</span>
              <strong>{user?.id || 'Not assigned'}</strong>
            </div>
          </div>
          <div className="form-grid">
            <div className="field"><label>Full Name</label><input value={formData.name} disabled={!editMode} onChange={(event) => setFormData({ ...formData, name: event.target.value })} /></div>
            <div className="field"><label>Email</label><input value={formData.email} disabled /></div>
            {hasVerifiedProfile && <div className="field"><label>Phone</label><input value={formData.phone} disabled={!editMode} onChange={(event) => setFormData({ ...formData, phone: event.target.value })} /></div>}
            {hasVerifiedProfile && <div className="field"><label>Country</label><input value={formData.country} disabled={!editMode} onChange={(event) => setFormData({ ...formData, country: event.target.value })} /></div>}
            {hasVerifiedProfile && <div className="field"><label>City</label><input value={formData.city} disabled={!editMode} onChange={(event) => setFormData({ ...formData, city: event.target.value })} /></div>}
            {hasVerifiedProfile && <div className="field"><label>Post Code</label><input value={formData.postCode} disabled={!editMode} onChange={(event) => setFormData({ ...formData, postCode: event.target.value })} /></div>}
            <div className="field"><label>Timezone</label><input value={formData.timezone} disabled={!editMode} onChange={(event) => setFormData({ ...formData, timezone: event.target.value })} /></div>
            {hasVerifiedProfile && <div className="field"><label>Job</label><input value={user?.job || ''} disabled /></div>}
            <div className="avatar-section">
              <div className="avatar-section-head">
                <div className="avatar-section-copy">
                  <strong>Profile Photo</strong>
                  <span>Upload your own photo from your phone or computer.</span>
                </div>
              </div>
              <div className="avatar-preview-row">
                <div className="avatar-preview-chip">
                  {formData.avatar ? <img src={formData.avatar} alt={displayName} /> : <div className="avatar-fallback">{avatarInitial}</div>}
                </div>
                <div className="avatar-preview-copy">
                  <strong>{displayName || 'Trader Profile'}</strong>
                  <span>{editMode ? 'Choose an image file, then save your profile changes.' : 'Your current public trading profile image.'}</span>
                </div>
              </div>
              <div className="avatar-help">Your profile photo is stored in this demo account after you save the profile.</div>
              <div className="avatar-actions">
                <label className="upload-btn">
                  <Camera size={16} />
                  Choose Photo
                  <input className="sr-only" type="file" accept="image/*" disabled={!editMode} onChange={handleAvatarUpload} />
                </label>
                <span className="upload-note">JPG, PNG, or WEBP from mobile or desktop</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'security' && (
        <section className="card content-card">
          <div className="card-head">
            <h2>Security Settings</h2>
            <button className={`edit-btn ${securityMode ? 'save' : ''}`} onClick={() => (securityMode ? savePassword() : setSecurityMode(true))}>
              {securityMode ? 'Update Password' : 'Change Password'}
            </button>
          </div>
          <div className="form-grid">
            <div className="field"><label>Current Password</label><input type="password" value={passwords.currentPassword} disabled={!securityMode} onChange={(event) => setPasswords({ ...passwords, currentPassword: event.target.value })} /></div>
            <div className="field"><label>New Password</label><input type="password" value={passwords.newPassword} disabled={!securityMode} onChange={(event) => setPasswords({ ...passwords, newPassword: event.target.value })} /></div>
            <div className="field full"><label>Confirm New Password</label><input type="password" value={passwords.confirmPassword} disabled={!securityMode} onChange={(event) => setPasswords({ ...passwords, confirmPassword: event.target.value })} /></div>
          </div>
          <div className="submit-note">This is still a demo app, but the password now updates in your stored user profile so the settings area feels more real.</div>
        </section>
      )}

      {activeTab === 'verification' && (
        <section className="card content-card">
          <div className="card-head"><h2>KYC Verification</h2></div>
          <div className="kyc-stage">
            {verificationStatus === 'approved' ? (
              <div className="verified-card">
                <div className="kyc-headline">
                  <Award size={22} />
                  Verified Successfully
                </div>
                <div className="kyc-copy">Your account is verified and trading access is active. BTCTradePro has approved the profile information you submitted.</div>
                <div className="certificate-sheet">
                  <div className="certificate-brand">
                    <div className="certificate-badge">₿</div>
                    <div>
                      <div className="certificate-title">BTCTradePro Compliance Network</div>
                      <div className="certificate-title">Verification Department</div>
                      <div className="certificate-subtitle">Account Verification Status Information</div>
                    </div>
                  </div>
                  <div className="certificate-center">Identity Verification Confirmation</div>
                  <div className="certificate-meta">
                    <div><strong>Date:</strong> {new Date().toLocaleDateString()}</div>
                    <div><strong>Account Holder:</strong> {currentKyc?.fullName || user?.name || 'Trader'}</div>
                    <div><strong>Account Email:</strong> {user?.email || 'No email added'}</div>
                    <div><strong>Phone:</strong> {currentKyc?.phone || user?.phone || 'Not set'}</div>
                    <div><strong>Country:</strong> {currentKyc?.country || user?.country || 'Not set'}</div>
                    <div><strong>City:</strong> {currentKyc?.city || user?.city || 'Not set'}</div>
                    <div><strong>Post Code:</strong> {currentKyc?.postCode || user?.postCode || 'Not set'}</div>
                    <div><strong>Job:</strong> {currentKyc?.job || user?.job || 'Not set'}</div>
                    <div><strong>Document Type:</strong> {currentDocumentType}</div>
                    <div><strong>Verification Status:</strong> Approved</div>
                  </div>
                  <div className="certificate-notice">
                    This letter confirms that the submitted account information and identity documents have been reviewed by BTCTradePro and marked as verified for platform trading access.
                  </div>
                  <div className="certificate-sign">
                    Sincerely, <strong>BTCTradePro Verification Department</strong>
                  </div>
                </div>
                <div className="submit-note">Submitted document images are stored in the system review, but they are hidden from the verified profile view.</div>
              </div>
            ) : verificationStatus === 'pending' ? (
              <div className="waiting-card">
                <div className="kyc-headline">
                  <FileText size={22} />
                  Verification Waiting Letter
                </div>
                <div className="kyc-copy">Your verification request has been sent to System Admin. Please wait while your identity information and document images are reviewed.</div>
                <div className="info-list" style={{ marginTop: '18px' }}>
                  <div className="info-item"><div><strong>Full Name</strong><small>{currentKyc?.fullName || displayName}</small></div><div className="status-pill pending">Pending</div></div>
                  <div className="info-item"><div><strong>Phone</strong><small>{currentKyc?.phone || 'Not set'}</small></div><div>{currentDocumentType}</div></div>
                  <div className="info-item"><div><strong>Country</strong><small>{currentKyc?.country || 'Not set'}</small></div><div>{currentDocumentType}</div></div>
                </div>
                <div className="doc-grid" style={{ marginTop: '18px' }}>
                  <div className="doc-card">
                    <strong>Front Document</strong>
                    <div className="doc-preview">
                      {currentKyc?.frontImage ? <img src={currentKyc.frontImage} alt="pending front document" /> : 'No image'}
                    </div>
                  </div>
                  <div className="doc-card">
                    <strong>Back Document</strong>
                    <div className="doc-preview">
                      {currentKyc?.backImage ? <img src={currentKyc.backImage} alt="pending back document" /> : 'No image'}
                    </div>
                  </div>
                </div>
                {(kycSubmitted || verificationStatus === 'pending') && <div className="submit-note">Verification request sent successfully. Trading stays locked until approval.</div>}
              </div>
            ) : (
              <>
                <div className="form-grid">
                  <div className="field"><label>Full Name</label><input value={kycForm.fullName} onChange={(event) => setKycForm({ ...kycForm, fullName: event.target.value })} /></div>
                  <div className="field"><label>Phone Number</label><input value={kycForm.phone} onChange={(event) => setKycForm({ ...kycForm, phone: event.target.value })} placeholder="+1 234 567 8900" /></div>
                  <div className="field">
                    <label>Country</label>
                    <select value={kycForm.country} onChange={(event) => setKycForm({ ...kycForm, country: event.target.value })}>
                      <option value="">Choose a country</option>
                      {COUNTRY_OPTIONS.map((country) => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                  <div className="field"><label>City</label><input value={kycForm.city} onChange={(event) => setKycForm({ ...kycForm, city: event.target.value })} /></div>
                  <div className="field"><label>Post Code</label><input value={kycForm.postCode} onChange={(event) => setKycForm({ ...kycForm, postCode: event.target.value })} /></div>
                  <div className="field"><label>Job</label><input value={kycForm.job} onChange={(event) => setKycForm({ ...kycForm, job: event.target.value })} /></div>
                  <div className="field">
                    <label>Document Type</label>
                    <select value={kycForm.documentType} onChange={(event) => setKycForm({ ...kycForm, documentType: event.target.value as 'id_card' | 'drivers_license' | 'passport' })}>
                      <option value="passport">Passport</option>
                      <option value="id_card">ID Card</option>
                      <option value="drivers_license">Driver License</option>
                    </select>
                  </div>
                  <div className="doc-card full">
                    <strong>Document Front</strong>
                    <div className="doc-preview" style={{ marginBottom: '12px' }}>
                      {kycForm.frontImage ? <img src={kycForm.frontImage} alt="front document preview" /> : 'Upload the front side image'}
                    </div>
                    <label className="upload-btn">
                      <Camera size={16} />
                      Upload Front Image
                      <input className="sr-only" type="file" accept="image/*" onChange={handleKycImageUpload('frontImage')} />
                    </label>
                  </div>
                  <div className="doc-card full">
                    <strong>Document Back</strong>
                    <div className="doc-preview" style={{ marginBottom: '12px' }}>
                      {kycForm.backImage ? <img src={kycForm.backImage} alt="back document preview" /> : 'Upload the back side image'}
                    </div>
                    <label className="upload-btn">
                      <Camera size={16} />
                      Upload Back Image
                      <input className="sr-only" type="file" accept="image/*" onChange={handleKycImageUpload('backImage')} />
                    </label>
                  </div>
                </div>
                <button className="edit-btn save" style={{ marginTop: '18px' }} onClick={submitKyc}>Verify Account</button>
                <div className="submit-note">
                  Complete this form and upload front and back document photos. After submission, the request goes to System Admin and your account stays unverified until approval.
                </div>
              </>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
