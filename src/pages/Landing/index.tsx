/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContentHeader from '../../components/ContentHeader'

import './styles.css'
import SearchButton from '../../components/SearchButton'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts'

function ConfrimResult() {
  function HandleScroll() {
    console.log('alo')
  }
  const { setNumProcesso, setCpfUser } = useAuth()
  return (
    <div className="container">
      {HandleScroll}
      <Header />

      <ContentHeader searchProcess={false} />

      <div className="processNumber-container">
        <form>
          <div className="field">
            <label>Número do processo</label>
            <input type="text" />
          </div>

          <div className="field">
            <label>O seu CPF</label>
            <input type="text" />
          </div>
        </form>

        <div className="next-page">
          <button type="submit" className="button-submit">
            <Link to="/ConfirmResult" className="">
              <SearchButton name="Prosseguir" />
            </Link>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ConfrimResult
