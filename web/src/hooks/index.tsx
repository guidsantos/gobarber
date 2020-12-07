import React from 'react';

import { AuthProvider } from '../hooks/Auth';
import { ToastProvider} from '../hooks/Toast';


const AppProvider: React.FC = ({children}) => (
  <AuthProvider>
      <ToastProvider>{children}</ToastProvider>

  </AuthProvider>
)

export default AppProvider;
