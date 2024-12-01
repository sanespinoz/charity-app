const path = require('path');
const mongoose = require('mongoose');

const Institution = require(path.resolve(__dirname, 'src/models/Institution'));
const Section = require(path.resolve(__dirname, 'src/models/Section'));
const Child = require(path.resolve(__dirname, 'src/models/Child'));
const Tutor = require(path.resolve(__dirname, 'src/models/Tutor'));
const Coordinator = require(path.resolve(__dirname, 'src/models/Coordinator'));

mongoose.connect('mongodb://localhost:27017/charityApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

async function seedDatabase() {
  try {
    console.log("Starting to seed the database...");

    // Create coordinators
    const coordinator1 = new Coordinator({ name: 'Alice', phone: '123456789' });
    const coordinator2 = new Coordinator({ name: 'Bob', phone: '987654321' });
    await coordinator1.save();
    await coordinator2.save();
    console.log("Coordinators saved.");

    // Create sections
    const section1 = new Section({ name: '1A', coordinator: coordinator1._id });
    const section2 = new Section({ name: '1B', coordinator: coordinator2._id });
    await section1.save();
    await section2.save();
    console.log("Sections saved.");

    // Create institution
    const institution1 = new Institution({
      name: 'Primary School A',
      address: '123 School Street',
      referent: 'Principal Smith',
      phone: '123-456-7890', 
      email: 'contact@schoola.com',
      sections: [section1._id, section2._id]
    });
    await institution1.save();
    console.log("Institution saved.");

    
     // Creating tutors
     const tutor1 = new Tutor({ type: 'Individual', name: 'Tommy', email: 'tommy@example.com', phone: '555-1234' });
     const tutor2 = new Tutor({ type: 'Company', name: 'Big Corp', email: 'contact@bigcorp.com', phone: '555-5678' });
     await tutor1.save();
     await tutor2.save();
   
     console.log(Child);

     // Creating children with references to section and tutor
     const child1 = new Child({ name: 'John', age: 10, sex: 'Boy', tutor: tutor1._id, section:section1._id});
     const child2 = new Child({ name: 'Jane', age: 8, sex: 'Girl', tutor: tutor2._id, section:section2._id});
     await child1.save();
     await child2.save();

    console.log("Seeding complete!");
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    await mongoose.disconnect(); // Use await to ensure the connection closes
    console.log("Disconnected from MongoDB.");
  }
}

seedDatabase();
