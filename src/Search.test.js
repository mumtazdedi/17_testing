import React from "react";
import axios from "axios";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Search from "./Search";

jest.mock("axios");

test(' fetch stories from API and display them', async () => {
    const storiesSearch = [
        { objectId: 1, title: "title 1" },
        { objectId: 2, title: "title 2" },
    ];

    axios.get.mockImplementationOnce(() => Promise.resolve({ data: { hits: storiesSearch } }));

    render(<Search />);

    userEvent.click(screen.getByRole('button', { name: /cari cerita/i }));

    const stories = await screen.findAllByRole('listitem');

    expect(stories.length).toBe(2);
    expect(stories[0]).toHaveTextContent('title 1');
    expect(stories[1]).toHaveTextContent('title 2');
});

test(' fetch stories from API and fail', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));

    render(<Search />);

    userEvent.click(screen.getByRole('button', { name: /cari cerita/i }));

    const error = await screen.findByText(/ada yang error/i);

    expect(error).toBeInTheDocument();
});