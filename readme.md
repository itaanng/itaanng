# itaanng
Directory for on-going personal projects.
## Packages
### Any Variant
Highly flexible component composition API for React
#### Goals
- Establish cleaner standard for React component composition
- Improve DX by flattening deeply nested component trees
- Provide clearer component variant definitions
#### Features
- `defineSlotGroup` util to flatten nested component layouts, such as:
```JSX
// This component tree with nested nodes 
<Card>
	<CardHeader>
		<CardTitle>{...}</CardTitle>
		<CardAction>{...}</CardAction>
	</CardHeader>
</Card>

// Can also be written as
<Card>
	<Card.Slot at="header.title">{...}</Card.Slot>
	<Card.Slot at="header.action">{...}</Card.Slot>
</Card>
```

- `defineVariant` util to declare component tied to its variants definitions. The component must return a single ReactElement, which props will be gathered for defaults:
```JSX
// This component with variants
export const tvTag = tv({ base: '...', variants: { border: { ... } } });

type TagProps = React.ComponentProps<'span'> & VariantProps<typeof tvTag>;
export const Tag = ({ border, className, ...props }: TagProps) => (
	<span className={tvTag({ border, className })} {...props} />
);

// Can also be written as
export const Tag = defineVariant((props: React.ComponentProps<'span'>) => (
	<span className='...' {...props} />
), tv({ variants: { border: { ... } } }));
```

#### Dependencies
- css-variants@2.3.4
- tailwind-merge@3.4.0