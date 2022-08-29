import { useState, useEffect } from 'react'
import BackButton from "../components/buttons/BackButton"
import Loading from '../components/ui/Loading';

function AppLayout({ children }) {

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 1000);
  }, [isLoading]);

  return (
    <div className="min-h-screen block p-2 text-white bg-gradient-to-r from-primary to-blue-500">
        {/* back button */}
        <BackButton />

        <div className="block w-full text-gray-600 p-2 lg:w-10/12 mx-auto bg-white rounded shadow">
            { isLoading ? <Loading /> : children }
        </div>

    </div>
  )
}

export default AppLayout