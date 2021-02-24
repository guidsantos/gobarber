import React from 'react';

import { AuthProvider } from '../hooks/Auth';
import { ToastProvider} from '../hooks/toast';


const AppProvider: React.FC = ({children}) => (
  <AuthProvider>
      <ToastProvider>{children}</ToastProvider>

  </AuthProvider>
)

export default AppProvider;
