<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'

  const activeProgram = ref(null)

  const programs = [
    {
      id: 'HOME',
      name: 'Home Search Assistance Program',
      icon: '/icon-home.png',
      details: [
        'Exclusive access to unlisted rental properties across our local networks',
        'Overcoming challenges with affordability, placement with pets, poor credit, and rental applications',
        'Connections to affordable housing programs, subsidized rentals, or housing for the elderly',
      ],
    },
    {
      id: 'MOVE',
      name: 'Pack-And-Move Program',
      icon: '/icon-move.png',
      details: [
        'Our team can help pack - and we have access to discounted or free packing supplies!',
        'We can move your stuff, coordinate a pod, handle junk/trash removal, take things to donation centers, and more.',
      ],
    },
    {
      id: 'JOB',
      name: 'Job Search Program',
      icon: '/icon-job.png',
      details: [
        'We help with your job search by identifying local jobs with increased income potential',
        'Guidance provided throughout the hiring process',
        "Need help writing strong cover letters? We've got it covered!",
      ],
    },
  ]

  const openModal = (programId) => {
    activeProgram.value = programs.find((p) => p.id === programId)
  }

  const closeModal = () => {
    activeProgram.value = null
  }

  const handleKeydown = (e) => {
    if (e.key === 'Escape') closeModal()
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
  })
</script>

<template>
  <section class="section-relocation">
    <div class="container">
      <h2>Fresh Start <span>Relocation</span> Program</h2>
      <p>
        We’re here to make your transition to a new home as seamless as possible
        with these tailored services:
      </p>

      <div class="three-col-grid">
        <div
          v-for="program in programs"
          :key="program.id"
          class="grid-item cursor-pointer transition-transform ease-in-out duration-200 hover:-translate-y-1 hover:bg-[rgba(184,115,51,0.2)]"
          @click="openModal(program.id)"
        >
          <img :src="program.icon" :alt="program.name" class="icon" />
          <p>{{ program.name }}</p>
        </div>
      </div>
    </div>

    <!-- Backdrop -->
    <transition name="fade">
      <div
        v-if="activeProgram"
        class="modal fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        @click.self="closeModal"
      >
        <transition name="slide-up">
          <div class="modal-body">
            <button @click="closeModal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
              >
                <path
                  d="M26.25 8.75L8.75 26.25M8.75 8.75L26.25 26.25"
                  stroke="#E38C3B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <div v-if="activeProgram">
              <div class="modal-header">
                <img
                  :src="activeProgram.icon"
                  :alt="activeProgram.name"
                  class="icon"
                />
                <h3>{{ activeProgram.name }}</h3>
              </div>
              <ul>
                <li v-for="(item, index) in activeProgram.details" :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </section>
</template>

<style lang="scss" scoped>
  .section-relocation {
    display: flex;
    padding: 50px 0;
    flex-direction: column;
    background-color: var(--DarkBlue);
    border-top: 6px solid var(--Copper);
  }

  .container {
    max-width: 1088px;
    margin: 0 auto;
    padding: 0 20px;
  }

  h2 {
    color: var(--OffWhite);
    font-size: clamp(28px, 4vw, 40px);
    font-weight: 600;
    line-height: 122.631%;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin: 0 0 20px;

    span {
      color: var(--Copper);
    }
  }

  p {
    color: var(--OffWhite);
    font-size: 16px;
    font-weight: 600;
    line-height: 33px;
    letter-spacing: 0.8px;
  }

  .three-col-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 35px;
    margin: 20px 0 40px;

    .grid-item {
      display: flex;
      padding: 27px 9px;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      flex: 1 0 0;
      align-self: stretch;
      border: 1px solid var(--Copper);
      text-align: center;
    }

    .icon {
      width: 59px;
      height: 59px;
      aspect-ratio: 1/1;
    }
  }

  .modal {
    padding: 0 10px;
    .modal-body {
      position: relative;
      color: var(--DarkBlue);
      background-color: var(--OffWhite);
      max-width: 1088px;
      padding: 39px 15px;
      align-items: flex-start;
      gap: 22px;
    }

    .modal-header {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 0 0 15px;
      margin: 0 0 15px;
      border-bottom: 1px solid var(--Copper);
    }

    .icon {
      width: 49px;
      height: 49px;
      aspect-ratio: 1/1;
      margin: 0 18px 0 0;
    }

    h3 {
      font-size: 18px;
      font-weight: 500;
      line-height: 122.631%;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    ul {
      list-style: inside;
      padding: 13px 0 13px 10px;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.68px;
    }

    li {
      margin: 0 0 10px;
      &:last-child {
        margin: 0;
      }
    }

    button {
      position: absolute;
      right: 10px;
      top: 10px;
      cursor: pointer;

      svg {
        width: 30px;
        height: 30px;
        path {
          stroke: var(--Copper);
        }
      }
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .slide-up-enter-active {
    transition: transform 0.3s ease-out;
  }
  .slide-up-enter-from {
    transform: translateY(50px);
  }
  .slide-up-leave-active {
    transition: transform 0.3s ease-in;
  }
  .slide-up-leave-to {
    transform: translateY(50px);
  }

  @media (min-width: 880px) {
    .section-relocation {
      padding: 100px 0 70px 0;
    }
    p {
      font-size: 20px;
      line-height: 33px;
    }
    .three-col-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .modal {
      padding: 0;
      .modal-body {
        max-width: 1088px;
        padding: 39px 70px;
      }
      .icon {
        width: 49px;
        height: 49px;
      }
      h3 {
        font-size: 20px;
      }
      ul {
        font-size: 17px;
      }
      button {
        right: 20px;
        top: 15px;

        svg {
          width: 35px;
          height: 35px;
        }
      }
    }
  }

  @media (min-width: 1100px) {
    .container {
      padding: 0;
    }
  }
</style>
