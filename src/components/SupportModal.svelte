<script>
  const close = () => {
    const supportModal = document.getElementById('needSupport');
    const backdrop = document.getElementById('backdrop');
    if (backdrop) {
      backdrop.classList.remove('show')
    }
    if (supportModal) {
      supportModal.classList.remove('show')
    }
  }
</script>

<div
  class="modal fade"
  id="needSupport"
  tabindex="-1"
  role="dialog"
  aria-labelledby="needSupportLabel"
  aria-hidden="true"
>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header d-block text-center py-2 pt-3">
        <h4 class="fs-22">Требуется помощь?</h4>
      </div>
      <div class="modal-body pt-4">
        <p class="text-center fs-16" >
          Отправьте подробное описание проблемы нам на
          <br /><a href="mailto:support@enjoysurvey.com" style="color: #f77d00;">support@enjoysurvey.com</a>
        </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal" on:click={close}>Готово</button>
      </div>
    </div>
  </div>
</div>
<div class="modal-backdrop fade" id="backdrop"></div>