// ┌─────────────────────────────────────┐
// │                                     │
// │       Clear Colour Palette          │
// │                                     │
// └─────────────────────────────────────┘

import { list_palette } from '../palette/list_palette.js'

export function listener_clear_palette()
{
    const clearPalette = document.getElementById('modal-icon-clear-palette');

    clearPalette.addEventListener('click', function(event) {
        window.localStorage.removeItem('custom_palette');   
        list_palette()
    });
}