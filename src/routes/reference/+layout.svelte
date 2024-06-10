<script>
  import { onMount } from 'svelte';
  import SupportModal from '../../components/SupportModal.svelte';

  onMount(() => {
    const supportButton = document.getElementById('support_button');

    if (supportButton) {
      supportButton.addEventListener('click', () => {
        const supportModal = document.getElementById('needSupport');
        const backdrop = document.getElementById('backdrop');

        if (backdrop) {
          backdrop.classList.contains('show') ? backdrop.classList.remove('show') : backdrop.classList.add('show');
        }

        if (supportModal) {
          supportModal.classList.contains('show') ? supportModal.classList.remove('show') : supportModal.classList.add('show');
        }
      });
    }
  });
</script>

<slot/>

<SupportModal/>
