import React from 'react';
import DarkModeProvider from './DarkMode'
import * as DarkMode from '../contexts/DarkMode'
import {render,screen} from "@testing-library/react"
import Button from '@material-ui/core/Button';
import userEvent from '@testing-library/user-event';

const customRender = (ui:React.ReactNode, {...renderOptions}) =>{
  return render(
      <DarkModeProvider >{ui}</DarkModeProvider>,renderOptions,
      )
}

function ButtonUi() {
  const {is_dark_mode,setDarkMode} = React.useContext(DarkMode.DarkModeContext) as DarkMode.DarkModeContextType;

  return(
      <Button onClick={()=>{setDarkMode(!is_dark_mode)}} >{is_dark_mode? "Light":"Dark"}</Button>
      )
}
describe('test basice functions of DarkModeProvider',()=>{
  beforeEach(()=>{
    customRender(
      <DarkModeProvider>
        <ButtonUi/>
      </DarkModeProvider>,{}
      );
  })
  describe("when page is initialized", ()=>{
      it("then show the light theme by default",()=>{
          // "Dark" text is only shown when the light theme is active
          expect(screen.getByText(/Dark/i)).toBeTruthy();
          })
      })
  describe("when the toggle theme button is clicked",()=>{
      beforeEach(()=>{
          userEvent.click(screen.getByText(/Dark/i));
          });
      it("then use the dark theme",()=>{
          expect(screen.getByText(/Light/i)).toBeTruthy();
          });
      });
})

