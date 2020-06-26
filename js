<script>
  var daysToExclude = [];
  {% for i in (0..6) %}
    {% capture settingsDay %}day_{{ i }}{% endcapture %}
    {% if settings[settingsDay] == false %}
      daysToExclude.push({{ i }});
    {% endif %}
  {% endfor %}
</script>
