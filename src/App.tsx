
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import Navbar from './components/Navbar'
import './App.css'
import Sidebar from './components/Sidebar'
import { Box, Stack } from '@mui/material'

function App() {

  return (
   <Box>
    {/* <Navbar/> */}
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
    <Sidebar/>
    <Feed />
    <Rightbar />
    </Stack>
    </Box>
  )
}

export default App
