// gateway-service/src/controllers/gatewayController.js
import axios from 'axios';
import 'dotenv/config';

// ─── AUTH ─────────────────────────────────────────────
const forwardAuthRequests = async (req, res, next) => {
  try {
    const authServiceUrl = process.env.AUTH_SERVICE_URL;
    const path = req.originalUrl.replace('/auth', '');
    const url = `${authServiceUrl}${path}`;
    console.log(`Forwarding AUTH request to: ${url}`);

    const response = await axios.request({
      method: req.method,
      url,
      data: req.body,
      headers: { 'Content-Type': 'application/json' },
    });

    console.log('Auth service response:', response.data);
    return res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error forwarding to Auth service:', error.message);
    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    }
    return next(error);
  }
};

// ─── FINANCE ──────────────────────────────────────────
const forwardFinanceRequests = async (req, res, next) => {
  try {
    const financeServiceUrl = process.env.FINANCE_SERVICE_URL;
    const path = req.originalUrl.replace('/finance', '');  
    const url = `${financeServiceUrl}${path}`;
    console.log(' Final URL being requested:', url);


    console.log('Before axios call to:', url);
    const response = await axios({
      method: req.method,
      url,
      data: req.body,
      headers: { 'Content-Type': 'application/json' },
    });
    console.log('Success from finance:', response.data);

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error while forwarding to Finance Service:', error.message);
    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    }
    return next(error);
  }
};



// ─── PING ─────────────────────────────────────────────
const ping = async (req, res, next) => {
  try {
    return res.status(200).json({ message: 'pong' });
  } catch (error) {
    return next(error);
  }
};

export { forwardAuthRequests, forwardFinanceRequests, ping };
