'use client';
import NavBar from '@/components/Navbar/NavBar';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function RootLayout({ children }) {
  return (
    <html style={{ minHeight: '100vh' }} lang="en">
      <body style={{ minHeight: '100vh' }} >
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
