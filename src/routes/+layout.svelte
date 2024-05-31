<style>
  .header__nav {
    text-align: center;
    width: 100%;
    border-bottom: 1px solid #e6e6e6;
    position: relative;
    z-index: 10;
    height: 73px;
    position: fixed;
    top: 0;
    background: #f6f6f6;
  }

  .header__nav li {
    display: inline-block;
    font-size: 18px;
    margin: 10px 20px 0;
  }
</style>

<nav class="header__nav d-flex align-items-center">
  <ul>
    <li>
      <a
        href="https://enjoysurvey.ru//#opportunity">Возможности</a
      >
    </li>
    <li>
      <a href="https://enjoysurvey.ru/available-audience"
        >Доступная аудитория</a
      >
    </li>
    <li><a href="https://enjoysurvey.ru/prices">Тарифы</a></li>
    <li>
      <a href="https://enjoysurvey.ru/enterprise"
        >Профессиональная версия</a
      >
    </li>
  </ul>
</nav>

<slot />
