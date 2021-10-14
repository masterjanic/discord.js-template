# Interactions

Interaction Commands follow this basic structure:

```javascript
{
  name: 'CommandName',
  description: 'A description of the command.',
  options: [...],
}
...
```
**Please refer to example.js for a commented example.**

# Context Menus

Context menus can also be registered in the 'interactions' folder, but the description and options property must be left out.

```javascript
{
  name: 'ContextMenuName', // The name will be displayed when right clicking
  type: 'USER', // Either USER or MESSAGE
}
...
```
