import { tvsg } from '#lib/utils';
import { defineSlotGroup } from '#components/Slot';

const Header = defineSlotGroup(tvsg({ slots: { Root: (props: React.ComponentProps<'header'>) => <header {...props} />, Navbar: (props: React.ComponentProps<'nav'>) => <nav {...props} /> } }));
const Section = defineSlotGroup(tvsg({ slots: { Root: (props: React.ComponentProps<'section'>) => <section {...props} />, Header }, variants: {} }));

import { test, expect } from 'bun:test';
import { screen, render } from '@testing-library/react';

test('Renders slots accordingly', () => {
  render(
    <Section>
      <Section.Slot name='Header.Navbar'>Navbar content</Section.Slot>
      <Section.Slot name='Header'>Header content</Section.Slot>
      Section content
    </Section>,
  );

  const navbar = screen.getByText(/Navbar content/);
  expect(navbar.tagName).toBe('NAV');

  const header = screen.getByText(/Header content/);
  expect(header).toBe(navbar.parentElement!);
  expect(header.tagName).toBe('HEADER');

  const section = screen.getByText(/Section content/);
  expect(section).toBe(header.parentElement!);
  expect(section.tagName).toBe('SECTION');
});
