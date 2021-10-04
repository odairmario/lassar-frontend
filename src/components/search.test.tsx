import React from 'react';
import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';
import SearchBar from './search'

describe("test search component",()=>{
    beforeEach(()=>{
        const onSubmitFn = jest.fn()
        render(<SearchBar handle_submit={onSubmitFn}/>);

        })
    //describe("when write a url in search field",()=>{
    //    it("then show url in search bar",()=>{
    //        const form = screen.getByTestId("search-text-field")
    //        userEvent.type(form,"http://bbbserver.test/a")
    //        expect(form.value).toBe("http://bbbserver.test/a")
    //        })
    //    })
    it("when text is typed and submited",()=>{
        const form = screen.getByTestId("search-text-field")
        userEvent.type(form,"http://bbbserver.test/a")
        const submit_button = screen.getByTestId("submit-button")
        userEvent.click(submit_button);
        expect(jest.fn()).toHaveBeenCalledTimes(0);
        })
    })
