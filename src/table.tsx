import { SimpleTable } from 'solid-simple-table'
import { Component, For } from 'solid-js'
import projects from '/projects.json?import'

export const Table: Component = () => {
  return (
    <div class="mt-4 flex flex-col">
      <div class="my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden sm:rounded-lg">
            <For fallback={<div>Loading...</div>} each={projects}>
              {(project, i) => <li>{project.name}</li>}
            </For>
          </div>
        </div>
      </div>
    </div>
  )
}
