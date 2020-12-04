import React from 'react';
import { render } from '@testing-library/react';
import ImageComponent from './ImageComponent'


describe('ImageComponent', () => {

    it('should render with data props', () => {
        const { getByTestId } = render(
            <ImageComponent />
        );
        expect(getByTestId('imageContainer')).toBeInTheDocument();
    });
});