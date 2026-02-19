import { tv } from '#lib/utils';
import { defineVariant } from '#components/Variant';

const Box = defineVariant(
  (props: React.ComponentProps<'div'>) => <div className='flex-1' data-slot='box' {...props} />,
  tv({
    base: 'flex flex-col',
    variants: { layout: { grid: 'grid grid-cols-3' }, size: { sm: 'gap-1 p-2', fill: 'flex-2' } },
    compoundVariants: [{ layout: 'grid', size: 'sm', className: 'grid-cols-2' }],
  }),
);

import { test, expect, describe } from 'bun:test';
import { screen, render } from '@testing-library/react';

describe('Renders itself and children accordingly', () => {
  test('All flex-col items are rendered with the same dimensions', () => {
    render(
      <Box>
        {[...new Array(9)].map((_, index) => (
          <Box key={index}>Column {index}</Box>
        ))}
      </Box>,
    );
    const children = screen.getAllByText(/Column [0-8]/);
    expect(children).toBeArrayOfSize(9);
    const sizes = children.map(({ offsetHeight: h, offsetWidth: w }) => `h:${h};w:${w}` as const);
    expect(new Set(sizes).size).toBe(1);
  });
});

describe('Merges tailwind classes effectively', () => {
  test('Base element classNames are present when there are no conflicts', () => {
    render(<Box>My box with default classNames</Box>);
    expect(screen.getByText(/with default classNames/).className).toContain('flex-1');

    render(<Box layout='grid'>My box with variant classNames</Box>);
    expect(screen.getByText(/with variant classNames/).className).toContain('flex-1');

    render(<Box className='font-bold'>My box with custom classNames</Box>);
    expect(screen.getByText(/with custom classNames/).className).toContain('flex-1');
  });

  test('Base element classNames are overwritten by variant classNames and custom classNames', () => {
    render(<Box size='fill'>My box with default classNames overwritten by variant classNames</Box>);
    expect(screen.getByText(/by variant classNames/).className).not.toContain('flex-1');
    render(<Box className='flex-2'>My box with default classNames overwritten by custom classNames</Box>);
    expect(screen.getByText(/by custom classNames/).className).not.toContain('flex-1');
  });

  test('Variant classNames are overwritten by custom classNames', () => {
    render(
      <Box className='grid-cols-1' layout='grid'>
        My box with simple variant classNames overwritten by custom classNames
      </Box>,
    );
    expect(screen.getByText(/with simple variant classNames/).className).not.toContain('grid-cols-3');
    render(
      <Box className='grid-cols-1' layout='grid' size='sm'>
        My box with compound variant classNames overwritten by custom classNames
      </Box>,
    );
    expect(screen.getByText(/with compound variant classNames/).className).not.toContain('grid-cols-2');
  });
});
