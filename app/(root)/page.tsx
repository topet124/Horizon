import React from 'react'
import "./globals.css";
import HeaderBox from '@/components/ui/HeaderBox';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import RightSidebar from '@/components/ui/RightSidebar';
const Home = () => {
  const loggedIn = {
    firstName: 'Adrian', lastName: 'John',
    email: 'contact@jsmasterypro'

  }
  return (
    <section className="home" >
      <div className="home-content">
        <header className="home-header">
          <HeaderBox type="greeting"
            title="welcome"
            user={loggedIn?.firstName || 'guest'}
            subtext="Aceess and manage your account effeciantly." />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />

        </header>

      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{}, {}]}
      />


    </section >

  )
}

export default Home
