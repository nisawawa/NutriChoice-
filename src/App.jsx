import React, { useState, useEffect } from 'react';
import { calculateSAW, calculateTOPSIS, CRITERIA, AI_RECOMMENDATIONS } from './utils/dss';
import './index.css';

function App() {
  const [step, setStep] = useState(1);
  const [isChecking, setIsChecking] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'Laki-laki',
    weight: '',
    activityLevel: 'Sedang',
    budget: '',
    goal: 'Penyakit Jantung'
  });
  const [results, setResults] = useState(null);
  const [method, setMethod] = useState('SAW');
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleIdentitySubmit = () => {
    if (!formData.name || !formData.age || !formData.weight) {
      alert("Harap isi nama, usia, dan berat badan Anda.");
      return;
    }
    // Directly move to the next step
    setStep(2);
  };

  const handleCalculateSubmit = () => {
    if (!formData.budget) {
      alert("Harap masukkan budget Anda.");
      return;
    }
    const sawResults = calculateSAW(formData);
    const topsisResults = calculateTOPSIS(formData);
    setResults({ saw: sawResults, topsis: topsisResults });
    setStep(3);
  };

  const handleSelectMenu = (menu) => {
    setSelectedMenu(menu);
    // Scroll to top to see the success message
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setStep(1);
    setFormData({ name: '', age: '', gender: 'Laki-laki', weight: '', activityLevel: 'Sedang', budget: '', goal: 'Penyakit Jantung' });
    setResults(null);
    setSelectedMenu(null);
  };

  const getRecommendedCalories = () => {
    const age = parseInt(formData.age) || 25;
    
    if (formData.gender === 'Laki-laki') {
      if (age <= 29) return 2650;
      if (age >= 30 && age <= 49) return 2550;
      if (age >= 50 && age <= 64) return 2150;
      if (age >= 65 && age <= 80) return 1800;
      return 1600; // > 80
    } else {
      if (age <= 29) return 2250;
      if (age >= 30 && age <= 49) return 2150;
      if (age >= 50 && age <= 64) return 1800;
      if (age >= 65 && age <= 80) return 1550;
      return 1400; // > 80
    }
  };

  return (
    <div className="main-layout">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <a href="/" className="logo text-gradient">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-primary)'}}>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
              <path d="M8 11h8"/>
              <path d="M12 7v8"/>
            </svg>
            NutriChoice
          </a>
          <div>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-secondary)'}}>Sistem Pendukung Keputusan</span>
          </div>
        </div>
      </nav>

      <main className="container" style={{ flex: 1, padding: '3rem 1.5rem' }}>
        {/* Stepper */}
        <div className="stepper animate-fade-in">
          <div className={`step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
            <div className="step-circle">1</div>
          </div>
          <div className="step-line"></div>
          <div className={`step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
            <div className="step-circle">2</div>
          </div>
          <div className="step-line"></div>
          <div className={`step ${step >= 3 ? 'active' : ''}`}>
            <div className="step-circle">3</div>
          </div>
        </div>

        {/* Step 1: Welcome & Identity */}
        {step === 1 && (
          <div className="glass-panel card animate-fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Selamat Datang di <span className="text-gradient">NutriChoice</span></h1>
              <p style={{ color: 'var(--color-text-secondary)' }}>Silakan isi identitas Anda untuk memulai.</p>
            </div>

            <div className="input-group">
              <label className="input-label">Nama Lengkap</label>
              <input type="text" name="name" className="input-field" placeholder="Masukkan nama Anda" value={formData.name} onChange={handleInputChange} />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="input-group">
                <label className="input-label">Usia</label>
                <input type="number" name="age" className="input-field" placeholder="Contoh: 25" value={formData.age} onChange={handleInputChange} />
              </div>
              <div className="input-group">
                <label className="input-label">Jenis Kelamin</label>
                <select name="gender" className="select-field" value={formData.gender} onChange={handleInputChange}>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
              <div className="input-group">
                <label className="input-label">Berat Badan (kg)</label>
                <input type="number" name="weight" className="input-field" placeholder="Contoh: 65" value={formData.weight} onChange={handleInputChange} />
              </div>
              <div className="input-group">
                <label className="input-label">Aktivitas Fisik</label>
                <select name="activityLevel" className="select-field" value={formData.activityLevel} onChange={handleInputChange}>
                  <option value="Ringan">Ringan (Jarang olahraga)</option>
                  <option value="Sedang">Sedang (Olahraga 1-3x/minggu)</option>
                  <option value="Berat">Berat (Olahraga 4-5x/minggu)</option>
                </select>
              </div>
            </div>

            <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} onClick={handleIdentitySubmit}>
              Lanjut
            </button>
          </div>
        )}

        {/* Step 2: Health Goal & Preferences */}
        {step === 2 && (
          <div className="glass-panel card animate-fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
             <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Tujuan & Preferensi</h2>
              <p style={{ color: 'var(--color-text-secondary)' }}>Berdasarkan pengecekan riwayat kesehatan, sistem menyarankan Anda memilih fokus pencegahan penyakit di bawah ini.</p>
            </div>

            <div className="input-group">
              <label className="input-label">Pilih Tujuan Pencegahan Penyakit</label>
              <select name="goal" className="select-field" value={formData.goal} onChange={handleInputChange}>
                <option value="Penyakit Jantung">Penyakit Jantung</option>
                <option value="Diabetes">Diabetes</option>
                <option value="Hipertensi">Hipertensi</option>
                <option value="Kanker">Kanker</option>
              </select>
            </div>

            <div className="input-group">
              <label className="input-label">Masukkan Budget Harian (Rp)</label>
              <input type="number" name="budget" className="input-field" placeholder="Contoh: 50000" value={formData.budget} onChange={handleInputChange} />
            </div>

            <div style={{ padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '0.5rem', marginTop: '1.5rem', border: '1px solid #bbf7d0' }}>
              <h4 style={{ color: 'var(--color-primary-dark)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                👨‍⚕️ Saran Ahli Gizi
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                Sesuai profil Anda (Usia {formData.age} tahun, {formData.gender}), ahli gizi menyarankan asupan kalori harian sebesar <strong>{getRecommendedCalories()} kkal</strong>. Sistem akan menyeleksi menu makanan dengan nilai gizi terbaik yang sesuai dengan profil, budget, dan preferensi kesehatan Anda.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <button className="btn btn-secondary" style={{ flex: 1 }} onClick={() => setStep(1)}>
                Kembali
              </button>
              <button className="btn btn-primary" style={{ flex: 1 }} onClick={handleCalculateSubmit}>
                Hitung Rekomendasi
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Results */}
        {step === 3 && results && (
          <div className="animate-fade-in">
             <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Peringkat Menu Makanan Terbaik</h2>
              <p style={{ color: 'var(--color-text-secondary)' }}>Sistem telah menghitung nilai alternatif. Silakan pilih menu yang direkomendasikan.</p>
            </div>

            {selectedMenu && (
              <div style={{ padding: '1.5rem', backgroundColor: '#f0fdf4', borderRadius: '0.5rem', marginBottom: '2rem', border: '2px solid var(--color-primary)', textAlign: 'left', boxShadow: 'var(--shadow-md)' }}>
                <h3 style={{ color: 'var(--color-primary-dark)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✅ Menu Berhasil Dipilih!</h3>
                
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  {/* Foto Menu */}
                  <div style={{ width: '220px', height: '220px', flexShrink: 0, borderRadius: '0.75rem', overflow: 'hidden', backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #bbf7d0', boxShadow: 'var(--shadow-md)' }}>
                     <img src={AI_RECOMMENDATIONS[selectedMenu.id].image} alt={AI_RECOMMENDATIONS[selectedMenu.id].name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  
                  {/* Deskripsi */}
                  <div style={{ flex: '1 1 300px' }}>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>Rekomendasi AI: {AI_RECOMMENDATIONS[selectedMenu.id].name}</h4>
                    <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem', lineHeight: '1.5' }}>
                      <strong style={{ color: 'var(--color-primary-dark)' }}>Bahan Dasar Utama: {selectedMenu.name}</strong> <br/>
                      {AI_RECOMMENDATIONS[selectedMenu.id].desc}
                    </p>
                    
                    {/* Ide Penyajian */}
                    <div style={{ backgroundColor: 'rgba(255,255,255,0.7)', padding: '1rem', borderRadius: '0.5rem', borderLeft: '4px solid var(--color-primary)' }}>
                      <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '0.25rem', fontSize: '0.9rem' }}>💡 Ide Penyajian (Resep Singkat):</h4>
                      <p style={{ color: 'var(--color-text-secondary)', fontStyle: 'italic', margin: 0 }}>"{AI_RECOMMENDATIONS[selectedMenu.id].recipe}"</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <button className={`btn ${method === 'SAW' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setMethod('SAW')}>
                Metode SAW
              </button>
              <button className={`btn ${method === 'TOPSIS' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setMethod('TOPSIS')}>
                Metode TOPSIS
              </button>
            </div>

            <div className="glass-panel card">
              <h3 style={{ marginBottom: '1rem' }}>Peringkat berdasarkan {method}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                Alasan: {method === 'SAW' ? 'Perhitungan lebih sederhana dengan normalisasi dan pembobotan linier.' : 'Perhitungan lebih kompleks dengan mempertimbangkan jarak terdekat dari solusi ideal.'}
              </p>

              <div style={{ overflowX: 'auto' }}>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Peringkat</th>
                      <th>Menu Makanan</th>
                      <th>Skor Akhir</th>
                      <th>Kandungan Utama</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results[method.toLowerCase()].map((item, index) => (
                      <tr key={item.id} style={selectedMenu?.id === item.id ? { backgroundColor: '#dcfce7' } : {}}>
                        <td>
                          <span className={`rank-badge ${index < 3 ? `rank-${index + 1}` : 'rank-other'}`}>
                            {index + 1}
                          </span>
                        </td>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <img src={item.image} alt={item.name} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                            <strong style={{ fontSize: '1rem' }}>{item.name}</strong>
                          </div>
                        </td>
                        <td>
                          <span style={{ fontWeight: 600, color: 'var(--color-primary-dark)' }}>{item.score}</span>
                        </td>
                        <td>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            <span style={{ fontSize: '0.75rem', backgroundColor: '#f1f5f9', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>
                              Protein: {item.nutrition.protein}
                            </span>
                            <span style={{ fontSize: '0.75rem', backgroundColor: '#f1f5f9', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>
                              Serat: {item.nutrition.serat}
                            </span>
                            <span style={{ fontSize: '0.75rem', backgroundColor: '#f1f5f9', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>
                              Vitamin: {item.nutrition.vitamin}
                            </span>
                          </div>
                        </td>
                        <td>
                          <button 
                            className="btn btn-primary" 
                            style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                            onClick={() => handleSelectMenu(item)}
                          >
                            Pilih Menu
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <button className="btn btn-secondary" onClick={resetForm}>
                  Kembali ke Awal
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
