import {
  createReportService,
  getAllReportsService,
  getReportByIdService,
  updateReportStatusService
} from '../services/reportService.js';

export const createReport = async (req, res) => {
  try {
    const report = await createReportService(req.body);
    res.status(201).json(report);
  } catch (error) {
    console.error('Error creating report:', error);
    res.status(500).json({ message: 'Failed to create report' });
  }
};

export const getAllReports = async (_req, res) => {
  try {
    const reports = await getAllReportsService();
    res.status(200).json(reports);
  } catch (error) {
    console.error('Error fetching reports:', error);
    res.status(500).json({ message: 'Failed to fetch reports' });
  }
};

export const getReportById = async (req, res) => {
  try {
    const report = await getReportByIdService(req.params.id);
    res.status(200).json(report);
  } catch (error) {
    console.error('Error fetching report by ID:', error);
    res.status(500).json({ message: 'Failed to fetch report' });
  }
};

export const updateReportStatus = async (req, res) => {
  try {
    const updatedReport = await updateReportStatusService(req.params.id, req.body.status);
    res.status(200).json(updatedReport);
  } catch (error) {
    console.error('Error updating report status:', error);
    res.status(500).json({ message: 'Failed to update report status' });
  }
};
