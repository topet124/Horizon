import React from 'react'
import "./globals.css";
import HeaderBox from '@/components/ui/HeaderBox';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
const Home = () => {
  const loggedIn = {firstname: 'Adrian'}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox type="greeting"
            title="welcome"
            user={loggedIn?.firstname || 'guest'}
            subtext="Aceess and manage your account effeciantly." />
          
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
          
        </header>
      </div>
    </section>
  )
}

export default Home
