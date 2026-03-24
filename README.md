# 🌤️ Weather App

A modern, responsive **Weather Forecast App** built with **React.js** and **Material UI**, supporting **English & Arabic**, dynamic weather updates, and beautiful UI.

**🌐 Live Demo:** [Click here to open Weather App](https://timely-kangaroo-75dcaa.netlify.app/)

---

## 🔥 Demo

Search cities, switch languages, and see real-time weather updates with icons and temperature.

---

## 🚀 Features

- ✅ **Real-time Weather Data** from OpenWeatherMap API  
- ✅ **City Search**: Button click or Enter key  
- ✅ **Multi-language Support**: English / Arabic (RTL layout support)  
- ✅ **Responsive Design**: Works on mobile, tablet, and desktop  
- ✅ **Weather Details**:
  - Current temperature  
  - Weather description  
  - Min/Max temperatures  
  - Weather icon  
- ✅ **Local Storage**: Remembers last searched city  
- ✅ **Dynamic Date & Time** based on locale

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Material UI  
- **State Management**: React Hooks (`useState`, `useEffect`)  
- **API**: OpenWeatherMap  
- **Localization**: react-i18next + moment.js  
- **Styling**: Material UI Theme + CSS

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/ahmed1eid/Show_Weather.git
cd Show_Weather
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the app**

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Usage

1. Enter a **city** in the input field.  
2. Press **Enter** or click **Search**.  
3. Switch between **English** and **Arabic** using the language button.  
4. View:
   - City name  
   - Current date & time  
   - Temperature, min/max  
   - Weather description  
   - Weather icon

---

## 🌐 Screenshots

**Desktop View**  
![Desktop](Screenshots/desktop.png)

**Mobile View**  
![Mobile](Screenshots/mobile.png)

---

## 🔑 API Key

Get your API key from [OpenWeatherMap](https://openweathermap.org/api) and replace it in `App.js`:

```javascript
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`)
```

---

## 📝 File Structure

```
weather-app/
├─ src/
│  ├─ App.js
│  ├─ App.css
│  ├─ Components/
│  │  └─ theme.js
├─ public/
│  └─ index.html
├─ package.json
└─ README.md
```

---

## 💡 Future Improvements

- Auto-refresh weather every few minutes  
- Add 7-day forecast  
- Add geolocation for current location weather  
- Animated weather backgrounds based on conditions

---

## 📄 License

This project is **MIT licensed**.

