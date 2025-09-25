import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: ('owner' | 'admin' | 'manager' | 'operator' | 'client')[];
  redirectTo?: string;
}

export function ProtectedRoute({ 
  children, 
  allowedRoles = ['owner', 'admin', 'manager', 'operator', 'client'],
  redirectTo = '/login' 
}: ProtectedRouteProps) {
  const { user, profile, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-seo-dark">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-seo-blue"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={redirectTo} replace />;
  }

  if (!profile) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(profile.role as any)) {
    if (profile.role === 'client' && !allowedRoles.includes('client')) {
      return <Navigate to="/portal" replace />;
    }
    if (profile.role !== 'client' && allowedRoles.includes('client')) {
      return <Navigate to="/suite" replace />;
    }
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
}