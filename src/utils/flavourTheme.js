export function flavourTheme(value = '') {
 const text=value.toLowerCase();
 if (/pistachio|pista/.test(text)) return 'pistachio';
 if (/mango/.test(text)) return 'mango';
 if (/strawberry/.test(text)) return 'strawberry';
 if (/chocolate|nutella|kinder/.test(text)) return 'chocolate';
 if (/lotus/.test(text)) return 'lotus';
 return 'cream';
}
