require('dotenv').config();
const express =require('express');
const app = express();
const db= require('./models');
app.use(express.json());// parse the data sent by client in json format
const cors=require('cors');

const corsOptions = {
    origin: ['http://localhost:3000', 'https://br--atcmanager.netlify.app','https://cdn.tailwindcss.com'], // Allow localhost for dev and your Netlify app for production
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization','token'], // Allowed headers
    credentials: true, // Allow credentials like cookies, authorization headers
  };
  
  // Use CORS with the options
  app.use(cors(corsOptions));

//ROUTERS
const basicsRouter = require('./routes/basics');// case-insensitive on windows sever
app.use('/basics', basicsRouter); // request sent to postRouter->finding the route at Posts->response

const awardsRouter = require('./routes/awards');// case-insensitive on windows sever
app.use('/awards', awardsRouter); // request sent to postRouter->finding the route at Posts->response

const certificatesRouter = require('./routes/certificates');// case-insensitive on windows sever
app.use('/certificates', certificatesRouter); // request sent to postRouter->finding the route at Posts->response

const educationRouter = require('./routes/educations');// case-insensitive on windows sever
app.use('/educations', educationRouter); // request sent to postRouter->finding the route at Posts->response

const publicationsRouter = require('./routes/publications');// case-insensitive on windows sever
app.use('/publications', publicationsRouter); // request sent to postRouter->finding the route at Posts->response

const volunteerRouter = require('./routes/volunteers');
app.use('/volunteers', volunteerRouter); 

const workRouter = require('./routes/works');
app.use('/works', workRouter);

const projectsRouter = require('./routes/projects');
app.use('/projects', projectsRouter);

const skillsRouter = require('./routes/skills');
app.use('/skills', skillsRouter);

const languagesRouter = require('./routes/languages');
app.use('/languages', languagesRouter);

const interestsRouter = require('./routes/interests');
app.use('/interests', interestsRouter);

const profilesRouter = require('./routes/profiles');
app.use('/profiles', profilesRouter);

const locationsRouter = require('./routes/locations');
app.use('/locations', locationsRouter);

const userRouter = require('./routes/users');
app.use('/users', userRouter);

const validTokenRouter = require('./routes/valid_token');
app.use('/valid_token', validTokenRouter);

const dataRouter = require('./routes/data');
app.use('/data', dataRouter);

const imageRouter = require('./routes/image');
app.use('/image', imageRouter);

const projectRouter=require('./routes/Project');
app.use('/Project', projectRouter);

const project_joinedRouter=require('./routes/Project_joined');
app.use('/Project_joined', project_joinedRouter);

const taskRouter=require('./routes/Task');
app.use('/Task', taskRouter);

const commentRouter=require('./routes/Comment');
app.use('/Comment', commentRouter);

const reportRouter=require('./routes/Report');
app.use('/Report', reportRouter);

const feedbackRouter=require('./routes/Feedback');
app.use('/Feedback', feedbackRouter);


const PORT = process.env.PORT || 3000; // Fallback to 3000 if PORT is not defined
db.sequelize.sync().then(() => {
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server running on port ${PORT}`);
    });
})

