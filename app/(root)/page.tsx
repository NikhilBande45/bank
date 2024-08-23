import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {

    const loggedIN = {firstName : 'Nikhil' , lastName : 'Bande' , email : 'bandenikhil45@gmail.com'}
  return (
    <div>
      <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                    type = "greeting"
                    title = "welcome"
                    user = {loggedIN?.firstName || 'Guest'}
                    subtext = "Access and manage your account and transaction efficiently."
                />
                
                <TotalBalanceBox
                    accounts={[]}
                    totalBanks = {1}
                    totalCurrentBalance = {1250.35}
                />
            </header>

            RECENT TRANSACTIONS
        </div>

        <RightSidebar
          user = {loggedIN}
          transactions = {[]}
          banks = {[{currentBalance : 123.50} , {currentBalance : 124.79}]}
        />
      </section>
    </div>
  )
}

export default Home
