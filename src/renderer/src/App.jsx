import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import { useEffect } from 'react';

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')
  useEffect(()=>{
    window.api.activitypersentage((event, data) => {
      console.log(data, "mouse");
    });
     window.api.idletimer((event, data)=> {
      console.log(data, "idletime")
     })
  },[])



const handleClick = () => {
   window.electron.ipcRenderer.send("start-detection")
}
const handleClickDisable = () => {
  window.electron.ipcRenderer.send("stop-detection")
}


  return (
    <>

    <button onClick={handleClick}>Play</button>
    <button onClick={handleClickDisable}>Stop</button>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      <div className="text">
        Build an Electron app with <span className="react">React</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
        </div>
      </div>
      <Versions></Versions>
    </>
  )
}

export default App

