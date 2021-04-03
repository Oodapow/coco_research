package ro.upb.gateway.config;

import org.springframework.context.support.ReloadableResourceBundleMessageSource;

import java.util.Locale;
import java.util.Properties;

public class ExposedResourceBundleMessageSource extends ReloadableResourceBundleMessageSource {

    public Properties getKeys(Locale locale) {
        return getMergedProperties(locale).getProperties();
    }

    public String getValue(Locale locale, String code) {
        return getMergedProperties(locale).getProperty(code);
    }

}
