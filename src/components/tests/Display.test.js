import React from 'react';
import Display from "./../Display";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { testShow } from "../tests/Show.test"
import fetchShow from "./../../api/fetchShow";


jest.mock("./../../api/fetchShow")


test("renders without props passed in", () => {
    render(<Display />)
})

test('when fetch button is pressed, show component displays', async () => {
    fetchShow.mockResolvedValueOnce(testShow)

    render(<Display />)
    const button = screen.getByRole("button")
    // act(() => {userEvent.click(button)});
    userEvent.click(button)

    await waitFor(() => {
        const showComp = screen.queryByTestId("show-container")
        expect(showComp).not.toBeNull()
    })
})



///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.