db = db.getSiblingDB('black-nilb');

db.createUser({
  user: 'admin',
  pwd: 'password123',
  roles: [
    {
      role: 'readWrite',
      db: 'black-nilb'
    }
  ]
});