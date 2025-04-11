// Theme color configuration for THPT Quang Trung - Ha Dong website
// Change these values to update the entire website's color scheme

const themeConfig = {
    // Primary colors
    primary: "#1e40af", // Blue-700 - Main brand color
    primaryHover: "#1e3a8a", // Blue-800 - Darker version for hover states
    primaryLight: "#dbeafe", // Blue-100 - Lighter version for backgrounds

    // Secondary colors
    secondary: "#f9fafb", // Gray-50 - Background color
    secondaryDark: "#e5e7eb", // Gray-200 - For borders and separators

    // Text colors
    textDark: "#1f2937", // Gray-800 - Main text color
    textMedium: "#6b7280", // Gray-500 - Secondary text
    textLight: "#ffffff", // White - Text on dark backgrounds

    // Accent colors
    accent: "#3b82f6", // Blue-500 - For highlights and focus states
    success: "#10b981", // Green-500 - For success states
    error: "#ef4444", // Red-500 - For error states
}

// Function to apply theme to CSS variables
function applyTheme() {
    // Set CSS variables based on theme config
    document.documentElement.style.setProperty(
        "--color-primary",
        themeConfig.primary
    )
    document.documentElement.style.setProperty(
        "--color-primary-hover",
        themeConfig.primaryHover
    )
    document.documentElement.style.setProperty(
        "--color-primary-light",
        themeConfig.primaryLight
    )
    document.documentElement.style.setProperty(
        "--color-secondary",
        themeConfig.secondary
    )
    document.documentElement.style.setProperty(
        "--color-secondary-dark",
        themeConfig.secondaryDark
    )
    document.documentElement.style.setProperty(
        "--color-text-dark",
        themeConfig.textDark
    )
    document.documentElement.style.setProperty(
        "--color-text-medium",
        themeConfig.textMedium
    )
    document.documentElement.style.setProperty(
        "--color-text-light",
        themeConfig.textLight
    )
    document.documentElement.style.setProperty(
        "--color-accent",
        themeConfig.accent
    )
    document.documentElement.style.setProperty(
        "--color-success",
        themeConfig.success
    )
    document.documentElement.style.setProperty(
        "--color-error",
        themeConfig.error
    )
}

// Apply theme when DOM is loaded
document.addEventListener("DOMContentLoaded", applyTheme)

// Export theme for potential use in other scripts
window.themeConfig = themeConfig
