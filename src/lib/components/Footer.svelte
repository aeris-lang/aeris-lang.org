<footer class="footer">
  <div class="footer-content">
    <span class="developedby"
      >Developed by <a href="https://github.com/philly706869">PhillY</a></span
    >
    <span class="copyright">© 2025 PhillY / All rights reserved</span>
  </div>
</footer>

<style lang="scss">
  .footer {
    box-sizing: content-box;
    padding: 20px 0;
    border-top: var(--color-line) solid 1px;
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 30px;
    font-weight: 300;
    color: var(--color-subtext);
  }

  .developedby {
    font-size: 16px;

    & > a:hover {
      text-decoration: underline;
    }
  }

  .copyright {
    font-size: 14px;
  }
</style>
