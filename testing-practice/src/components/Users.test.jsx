import {render, screen} from '@testing-library/react';
import Users from "./Users.jsx";
import axios from "axios";


describe('Users test', () => {
    test('renders learn react link', () => {
        render(<Users/>)
    })
})