import { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabase';
import { Profile } from '../../supabase/types/profile.types';

export function useProfile() {
  const [profile, setProfile] = useState<Profile['Row'] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        setLoading(false);
        return;
      }

      supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single()
        .then(({ data }) => {
          if (!cancelled) {
            setProfile(data ?? null);
            setLoading(false);
          }
        });
    }).catch(() => {
      if (!cancelled) {
        setLoading(false);
      }
    });

    return () => { cancelled = true; };
  }, []);

  return { profile, loading };
}
