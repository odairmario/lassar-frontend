import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header'
import DarkModeProvider from './DarkMode'


describe('tests for <Header/>',()=>{
  beforeEach(()=>{
      render(
          <DarkModeProvider>
            <Header title="a test" />
          </DarkModeProvider>
          );

  })
  describe("when passed 'a test' as prop to Header",()=>{
      it("then show 'a test'",()=>{
        const linkElement = screen.getByText(/a test/i);
        expect(linkElement).toBeInTheDocument();

          })
      })
  describe("when page is initialized", ()=>{
      it("then show the bightness7 icon",()=>{
          // "Dark" text is only shown when the light theme is active
          expect(screen.getByTestId(/Brightness4Icon/i)).toBeTruthy();
          })
      })
  describe("when the toggle theme button is clicked",()=>{
      beforeEach(()=>{
          userEvent.click(screen.getByTestId(/Brightness4Icon/i));
          });
      it("then use the dark theme",()=>{
          expect(screen.getByTestId(/Brightness7Icon/i)).toBeTruthy();
          });
      });
})
