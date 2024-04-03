import db from './models/userModel.js';

const ApplicationController = {
  // ...

  getApplications: async (req, res) => {
    console.log('Made it to get applications methdod')
    try {
      const query = 'SELECT * FROM Applications';
      const result = await db.query(query);
      const applications = result.rows;

      console.log(applications)

      res.status(200).json(applications);
    } catch (error) {
      console.error('Error retrieving applications:', error);
      res.status(500).json({ error: 'An error occurred while retrieving applications' });
    }
  },
  createApplication: async (req, res) => {
    const { companyName, appDate, followUpDate, jobDescription, notes, contact } = req.body;
    const userID = req.cookies['userID'];
    // const resumePath = req.files && req.files['resume'] ? req.files['resume'][0].path : null;
    // const coverLetterPath = req.files && req.files['coverLetter'] ? req.files['coverLetter'][0].path : null;
  console.log(req.body)
    try {
      const query = `
        INSERT INTO Applications (UserID, CompanyName, AppDate, FollowUpDate, JobDescription, Notes, Contact)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *;
      `;
      const values = [
        userID,
        companyName,
        appDate,
        followUpDate,
        jobDescription,
        notes,
        contact
      ];
  
      const result = await db.query(query, values);
      const savedApplication = result.rows[0];
  
      res.status(201).json(savedApplication);
    } catch (error) {
      console.error('Error saving application:', error);
      res.status(500).json({ error: 'An error occurred while saving the application' });
    }
  },


};


export default ApplicationController;