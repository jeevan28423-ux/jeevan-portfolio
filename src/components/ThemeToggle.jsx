function ThemeToggle({ theme, onThemeChange }) {
  const isDark = theme === 'dark';

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() => {
        const newTheme = isDark ? 'light' : 'dark';
        console.log('Switching theme to:', newTheme);
        onThemeChange(newTheme);
      }}
    >
      {isDark ? '☾' : '☀'}
    </button>
  );
}

export default ThemeToggle;