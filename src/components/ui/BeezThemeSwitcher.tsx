import { Check } from 'lucide-react'
import { useBeezTheme } from '../../theme/useBeezTheme'

export function BeezThemeSwitcher() {
  const { setTheme, theme, themes } = useBeezTheme()

  return (
    <div aria-label="Seleccionar tema" className="beez-theme-switcher" role="list">
      {themes.map((item) => (
        <button
          aria-pressed={item.id === theme.id}
          className="beez-theme-chip"
          key={item.id}
          onClick={() => setTheme(item.id)}
          type="button"
        >
          <span className="beez-theme-chip__swatches">
            <span style={{ background: item.primary }} />
            <span style={{ background: item.accent }} />
          </span>
          <span>
            <strong>{item.name}</strong>
            <small>{item.app}</small>
          </span>
          {item.id === theme.id ? <Check aria-hidden="true" size={16} /> : null}
        </button>
      ))}
    </div>
  )
}
