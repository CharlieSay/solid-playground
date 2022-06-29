import type { Component } from 'solid-js'

const Header: Component = () => {
  return (
    <header class="container mx-auto px-4">
      <nav class="flex items-center justify-center flex-wrap bg-teal p-6">
        <div class="flex items-center flex-no-shrink text-white mr-6">
          <svg class="h-8 w-8 mr-2" xmlns="http://www.w3.org/2000/svg">
            <text
              fill="#fff"
              id="text"
              font-size=""
              font-family="Monospace"
              text-anchor="middle"
              font-weight="normal"
              font-style="normal"
              stroke="#fff"
            >
              {`</>`}
            </text>
          </svg>
          <span class="font-semibold text-xl">100 Projects</span>
        </div>
      </nav>
    </header>
  )
}

export default Header
