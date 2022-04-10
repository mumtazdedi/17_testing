import FormCoding from './FormCoding';
import { fireEvent, render, screen } from '@testing-library/react';

describe('FormCoding', () => {
    test('should render', () => {
        render(<FormCoding />);
        expect(screen.getByText('Pendaftaran Peserta Coding Bootcamp')).toBeInTheDocument();
    });
    test('should change the radio button', () => {
        render(<FormCoding />);
        const radioButton = screen.getByLabelText(/Latar Belakang Pendidikan:/i);
        fireEvent.click(radioButton);
        expect(radioButton.checked).toBe(true);
    });
    test('should change the select option', () => {
        render(<FormCoding />);
        const selectOption = screen.getByLabelText(/Kelas Coding yang Dipilih:/i);
        fireEvent.change(selectOption, { target: { value: 'fullstack' } });
        expect(selectOption.value).toBe('fullstack');
    });
    test('regex name', () => {
        render(<FormCoding />);
        const name = screen.getByLabelText(/Nama Lengkap:/i);
        fireEvent.change(name, { target: { value: 'Dedi' } });
        expect(name.value).toBe('Dedi');
    });
});