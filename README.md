```                                                                                              
     ##### ## ###                          /                ##### #     ##           /        
  ######  /##  ###                       #/              ######  /#    #### / #    #/         
 /#   /  / ##   ##                       ##             /#   /  / ##    ###/ ###   ##         
/    /  /  ##   ##                       ##            /    /  /  ##    # #   #    ##         
    /  /   /    ##                       ##                /  /    ##   #          ##         
   ## ##  /     ##      /###     /###    ##  /##          ## ##    ##   #   ###    ## /###    
   ## ## /      ##     / ###  / / ###  / ## / ###         ## ##     ##  #    ###   ##/ ###  / 
   ## ##/       ##    /   ###/ /   ###/  ##/   /          ## ##     ##  #     ##   ##   ###/  
   ## ## ###    ##   ##    ## ##         ##   /           ## ##      ## #     ##   ##    ##   
   ## ##   ###  ##   ##    ## ##         ##  /            ## ##      ## #     ##   ##    ##   
   #  ##     ## ##   ##    ## ##         ## ##            #  ##       ###     ##   ##    ##   
      /      ## ##   ##    ## ##         ######              /        ###     ##   ##    ##   
  /##/     ###  ##   ##    /# ###     /  ##  ###         /##/          ##     ##   ##    /#   
 /  ########    ### / ####/ ## ######/   ##   ### /     /  #####              ### / ####/     
/     ####       ##/   ###   ## #####     ##   ##/     /     ##                ##/   ###      
#                                                      #                                      
 ##                                                     ##                                    
                                                                                              
                                                                                              
```

# ✒️ Black Nib

A modern blog platform focused on technology, design, and creative writing, built with React and Vite.


## 🚀 Features

- Modern, responsive design
- Server-side rendering for SEO optimization
- Dark/Light theme support
- Infinite scroll for posts
- Category-based organization
- Reading time estimates
- Featured posts section
- RSS feed support

## 🛠️ Tech Stack

- **Frontend:**
  - React 18
  - Vite 6
  - React Router DOM 7
  - TanStack Query (React Query) 5
  - React Hot Toast
  - CSS Modules

- **Backend:**
  - Node.js
  - Express
  - MongoDB
  - Mongoose

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/black-nib.git
cd black-nib
```

2. Install frontend dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
cd api
npm install
```

4. Create a `.env` file in the `api` directory:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

## 🚀 Running the Application

1. Start the backend server:
```bash
cd api
npm run dev
```

2. In a new terminal, start the frontend development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📝 Project Structure

```
black-nib/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── services/      # API services
│   ├── styles/        # Global styles
│   └── routes/        # Route definitions
├── api/
│   ├── src/
│   │   ├── models/    # MongoDB models
│   │   ├── routes/    # API routes
│   │   └── server.js  # Express server
│   └── package.json
└── package.json
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Mr Punk da Silva
- Twitter: [@blacknib](https://twitter.com/blacknib)

## 🙏 Acknowledgments

- Font Awesome for icons
- Twemoji for the favicon
- Google Fonts for typography
