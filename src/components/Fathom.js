import { html } from "../utils/html.js";

/**
 * @param {{ siteId: string }} props
 * @returns {string}
 */ export default ({ siteId }) => html`<script>
  (function (f, a, t, h, o, m) {
    a[h] =
      a[h] ||
      function () {
        (a[h].q = a[h].q || []).push(arguments);
      };
    (o = f.createElement("script")), (m = f.getElementsByTagName("script")[0]);
    o.async = 1;
    o.src = t;
    o.id = "fathom-script";
    m.parentNode.insertBefore(o, m);
  })(document, window, "//stats.responsive.ch/tracker.js", "fathom");
  fathom("set", "siteId", "${siteId}");
  fathom("trackPageview");
</script>`;
