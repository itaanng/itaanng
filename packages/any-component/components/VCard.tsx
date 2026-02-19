import { Action, Avatar, Background, Badge, Content, Description, Excerpt, Footer, Header, Root, Title } from '#components/ui/card';
import { defineSlotGroup } from '@itaanng/any-variant/components/Slot';
import { tvsg } from '@itaanng/any-variant/lib/utils';

const VCardHeader = defineSlotGroup(tvsg({ slots: { Action, Avatar, Background, Badge, Description, Root: Header, Title } }));
const VCardContent = defineSlotGroup(tvsg({ slots: { Avatar, Badge, Description, Excerpt, Root: Content, Title } }));
const VCardFooter = defineSlotGroup(tvsg({ slots: { Action, Avatar, Description, Root: Footer } }));

export const VCard = defineSlotGroup(tvsg({ slots: { Content: VCardContent, Footer: VCardFooter, Header: VCardHeader, Root }, variants: {} }));
