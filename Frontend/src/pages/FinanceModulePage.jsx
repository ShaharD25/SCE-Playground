import React, { useState } from 'react';

function FinanceModulePage() {
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // לעצור רענון עמוד
  
    try {
      console.log('📦 Sending to backend:', {
        customerName: field1,
        customerId: field2,
      });
  
      const response = await api.post('/finance/save', {
        customerName: field1,
        customerId: field2,
      });
  
      console.log('✅ Server response:', response.data);
      alert('Data sent successfully!');
      
      // ניקוי הטפסים אחרי שליחה
      setField1('');
      setField2('');
      
    } catch (error) {
      console.error('❌ Failed to send data:', error);
      alert('Failed to send data to the server');
    }
  };
  

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Welcome to the Finance Module</h2>
      <p>This is where you’ll manage financial actions such as tracking payments, generating invoices, and more.</p>

      <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Enter value:</label><br />
          <input
            type="text"
            value={field1}
            onChange={(e) => setField1(e.target.value)}
            placeholder="Type something..."
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Second value:</label><br />
          <input
            type="text"
            value={field2}
            onChange={(e) => setField2(e.target.value)}
            placeholder="Type second value..."
          />
        </div>

        <button type="submit">Send Data</button>
      </form>
    </div>
  );
}

export default FinanceModulePage;
