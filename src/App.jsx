import './App.css'
import Header from './components/Header.jsx'
import ImportantTextBox from './components/ImportantTextBox.jsx'
import Footer from './components/Footer.jsx'
import VariableBox from './components/VariableBox.jsx'
import { Box } from '@mui/material'

function App() {
  return (
    <>
      <Header />
      <Box sx={{ display: 'flex', alignItems: 'center' , justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ImportantTextBox />
        <VariableBox />
      </Box>
      <Footer />
    </>
  )
}

export default App
